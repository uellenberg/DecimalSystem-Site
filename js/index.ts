import {isBrowser} from "./util";
import Prism from "prismjs";

if(isBrowser()){
    $(() => {
        Prism.highlightAll();
    });
}