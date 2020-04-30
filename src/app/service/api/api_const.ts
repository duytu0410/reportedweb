export const Report={
    protocol_http : "http",
    protocol_https : "https",
    DOMAIN : "aggregatedrevenue20200331042045.azurewebsites.net",
    AUTHORIZATION : "Authorization",
    CONTENT_TYPE:"Content-Type",
    API:{
        //DOANH THU THUC TE
        GET_DOANHTHUTHUCTE_BY_ID:"/api/DoanhThuThucTe/{id}",
        GET_ALL_HETHONG:"/api/DoanhThuThucTe/GetAllHeThong",
        GET_ALL_CUAHANG:"/api/DoanhThuThucTe/GetAllCuaHang",
        GET_ALL_KENHBANHANG:"/api​/DoanhThuThucTe​/GetAllKenhBanHang",
        GET_ALL_NHOMSP:"/api/DoanhThuThucTe/GetAllNhomSp",
        GET_ALL_NHANVIEN:"/api/DoanhThuThucTe/nhanvien",
        //PLANREVENUE
        GET_SUM_WITH_TITLE:"/api/PlanRevenue/GetSumWithTitle",
        //REAL REVENUE
        GET_COUNTED_ORDERS:"/api/RealRevenue/GetCountedOrders",
        GET_COUNTED_CUSTOMERS:"/api/RealRevenue/GetCountedCustomers",
        GET_SPECIFIC_STORE_WITH_TITLE:"​/api​/RealRevenue​/GetSpecificStoresWithTitle",
        GET_TOP_TEN_PRODUCTS_WITH_TITTLE:"/api/RealRevenue/GetTopTenProductsWithTitle",
        GET_SUM_GROUP_BY_CHANEL:"/api/RealRevenue/GetSumGroupByChannel",
    }
}