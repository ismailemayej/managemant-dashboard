"use client"
import { columns } from "../../../../../components/product-table/columns";
import { ProductListDataTable } from "@/app/(resticted-layout)/components/product-table/product-list-data-table";
import UiRoute from "@/components/UiRoute/UiRoute";
import CommonButton from "@/components/button/CummonButton";
import Title from "@/components/Title/Title";
import { useGetAllProductQuery } from "@/redux/api/productsApi";

const AllProduct = () => {
  const { data: products, isLoading, error } = useGetAllProductQuery({});
 

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading products</div>;
  }


  const pathRoute = [
    {
      name: "Dashboard",
      link: "/dashboard/super-admin",
    },
    {
      name: "Customers",
      link: "/dashboard/super-admin/product-list",
    },
  ];
  return (
    <div className="mx-4">
      <UiRoute routes={pathRoute} />
      <Title
        title="Total Products"
        subtitle="Manage employees (Server side table functionalities.)"
        right={
          <CommonButton link="/dashboard/super-admin/add-new-product">
            Add New Product
          </CommonButton>
        }
      />
      <ProductListDataTable  data={products?.products || []} columns={columns} />
    </div>
  );
};

export default AllProduct;
