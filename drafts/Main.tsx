import { Header } from "./components/header"
import { Footer } from "./components/footer"
// import { Table } from "./components/table"
//import { TableAG } from "./components/table-ag"
import { KATable } from "./components/katable"
import { KATable2 } from "./components/katable2"


import React, { useState } from 'react';
import { set } from "date-fns";


// import { PaginationButtons } from "./components/pagination-buttons"

export function Main() {

    const [date, setDate] = useState<string>("");

    return (
        <>
            <Header setDate={setDate} />
            <KATable date={date} />
            <Footer />
        </>
    );
}


