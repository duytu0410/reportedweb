export const ReportedApi={
    protocol_http : "http",
    protocol_https : "https",
    DOMAIN : "integratedanalytics20200504114228.azurewebsites.net",
    AUTHORIZATION : "Authorization",
    CONTENT_TYPE:"Content-Type",
    API:{
        //HR_BANG LUONG
        GET_SUM_WITH_CATEGORIES:"/api/HR_BangLuong/GetSumWithCategories",
        GET_SUM_WITH_CATEGORIES_IN_A_MONTH:"/api/HR_BangLuong/GetSumWithCategoriesInAMonth",
        GET_COUNTED_HR_IN_MONTH:"/api/HR_BangLuong/GetCountedHRInMonth",
        GET_COUNTED_ALL_NEW_HR:"​/api/HR_BangLuong/GetCountedAllNewHR",
        GET_COUNTED_ALL_QUITED_HR:"/api/HR_BangLuong/GetCountedAllQuitedHR",
        GET_SUM_WITH_CATEGORIES_IN_PB:"/api/HR_BangLuong/GetSumWithCategoriesInPhongBan",
        GET_COUNTED_ALL_HR_IN_ALL_PB:"/api/HR_BangLuong/GetCountedAllHRInAllPB",
        GET_SUM_CATEGORIES_GROUP_BY_MONTH:"/api/HR_BangLuong/GetSumCategoriesGroupByMonth",
        GET_SUM_CATEGORIES_IN_PB_GROUP_BY_MONTH:"/api/HR_BangLuong/GetSumCategoriesInPBGroupByMonth",
        GET_COUNTED_MANV_GROUPED_BY_MONTH:"/api/HR_BangLuong/GetCountedManvGroupByMonth",
        GET_COUNTED_ALL_NEW_HR_GROUP_BY_MONTH:"/api/HR_BangLuong/GetCountedAllNewHRGroupByMonth",
        GET_COUNTED_ALL_QUITED_HR_GROUP_BY_MONTH:"/api/HR_BangLuong/GetCountedAllQuitedHRGroupByMonth",
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