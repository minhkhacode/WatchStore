import { useState } from "react";
import Pagination from "../../common/Pagination";
import { useSelector } from "react-redux";
import { selectTotalUsers } from "../../user/userSlice";

function AdminUsers() {
    const [page, setPage] = useState(1);
    const totalOrders = useSelector(selectTotalUsers);


    const handlePage = (page) => {
        setPage(page);
    };
    return (
        <div className="mt-6">
            <div className="bg-gray-100 flex items-center justify-center font-sans overflow-hidden">
                <div className="w-full">
                    <div className="bg-white shadow-md rounded my-6">
                        a
                    </div>
                </div>
            </div>

            <Pagination
                page={page}
                setPage={setPage}
                handlePage={handlePage}
                totalItems={selectTotalUsers}
            ></Pagination>
        </div>
    )
}

export default AdminUsers;
