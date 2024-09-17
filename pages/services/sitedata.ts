import { firebaseDatabase } from "../../config/firebase";
import { SiteData } from "../../types"
import  {child, get, onValue, ref}  from "firebase/database"

export const SiteDataService = () => {
    const getSiteData = async ({ onComplete }:{onComplete?: (siteData: SiteData)=>void} = {}) : Promise<SiteData> => {
        try {
            if(onComplete){
                 onValue(ref(firebaseDatabase, 'siteData'), (snapshot) => {
                    const data = snapshot.val() as SiteData;
                    onComplete(data);
                }, (e)=>{
                    console.log(e)
                })
            }
            const result = await get(child(ref(firebaseDatabase),'siteData'));
            return result.val() as SiteData;
        }catch(e){
            console.log(e)
            return {name: "Ruki", team: []} as unknown as SiteData;
        }
    }

    return { getSiteData }
}