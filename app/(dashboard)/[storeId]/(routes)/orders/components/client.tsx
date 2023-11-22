"use client";

import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { DataTable } from "@/components/ui/data-table";

import { OrderColumn, columns } from "./columns";

interface OrderClinetProps {
  data: OrderColumn[]
}

export const OrderClinet: React.FC<OrderClinetProps> = ({
  data
}) => {
  return (
    <>
      <Heading 
          title={`Orders (${data.length})`}
          description="Manage orders for your store" 
        />
      <Separator />
      <DataTable searchKey="products" columns={columns} data={data} />
    </>
  )
}