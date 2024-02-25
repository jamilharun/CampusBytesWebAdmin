import rClient from "../../Api/redis";

//SET

//note:
//jamil you must test this code to see if it works properly

//add redis json data
export const arjd = async (data: any) => {
    try {
        const unique = await rClient.zAdd(data._type, {
            value: data.name,
            score: data._id,
        });
        if (unique) {
            const eM = `that ${data._type} has already exists in redis.`
            console.log(eM);
            return {error: eM};
        };
        await rClient.json.set( `${data._type}:${data._id}`, '.', data);
    } catch (err) {
        console.log('Error in ard:', err);
    }
};

//GET
export const grss = async (keyType: any) => {
    try {
        //get all redis sorted set
        const result = await rClient.zRangeWithScores( keyType, 0, -1);
        
        //show output
        console.log(result);
        if (!result) {
            console.log('Error in get all redis sorted sets:');
            return null
        } else {
            console.log('All redis sorted sets retrieved:', result.length);
            
            //get all redis json
            const jsonData = await Promise.all(result?.map(async (b: any) => {
                rClient.json.get( `${keyType}:${b.score}` );
            }));
            return JSON.parse(jsonData);
        }
    } catch (error) {
        console.log('An error occurred:', error);
    }
};
