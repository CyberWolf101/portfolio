import { Favorite } from "@mui/icons-material";
import React, { useContext } from "react";


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <div className="mt-5 footer ">
            <footer className={"p-2 border-top border-dark row px-2 py-4"}>
                <center>
                    <b>
                        Copyright © {currentYear} - TOBI OLALEYE all copyrights reserved <Favorite/>.
                    </b>
                </center>
            </footer>
        </div>

    )
}