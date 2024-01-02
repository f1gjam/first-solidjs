import { Header } from "./components/header"
import { Footer } from "./components/footer"
// import { Table } from "./components/table"
import { TableAG } from "./components/table-ag"
import { PaginationButtons } from "./components/pagination-buttons"
export function Main() {
    return (
        <>
            <Header />
            <TableAG />
            <PaginationButtons />

            <Footer />
        </>
    )
}