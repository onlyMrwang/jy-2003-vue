import Film from "@/views/Film/Film"
import Comingplaying from "@/views/Film/Comingplaying"
import Nowplaying from "@/views/Film/Nowplaying"


const filmRouter = 
    {
        path:"/Film",
        component:Film,
        // redirect:"/Film/nowplaying",
        children:[
            {path:"comingplaying",component:Comingplaying},
            {path:"nowplaying",component:Nowplaying},
        ]
    
    };


export default filmRouter;