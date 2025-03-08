import { navs } from "./common/navs"

console.log(navs);

/* import { index as indexPageData} from "./pages/index" */


export const getPageContext = (pagePath)=>{
    console.log("Page to Load Context:", pagePath)
    const commonVariables = {
        ...navs
    }

    // let pageVariables = {};
    // console.log("Page been loaded:", pagePath);
    // switch (pagePath) {
    //     case '/index.html':
    //         pageVariables = indexPageData
    //         break;
    //   case '/contactus.html':
    //        pageVariables = contactUsPageData
    //}
    const finalContext = {
        ...commonVariables,
        //...pageVariables
    }
    return finalContext
}