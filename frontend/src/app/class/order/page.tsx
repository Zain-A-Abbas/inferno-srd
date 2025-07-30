import { GetServerSideProps } from "next";
import db from "../../../../lib/db";
import { Way } from "../../../../types/db";
import getWayById from "../../../../lib/ways";
import MarkdownPage from "@/app/components/markdown_file";
import getOrderById from "../../../../lib/orders";
import fs from 'fs';

export default async function OrderPage({ searchParams }: Props) {
  const idString = (await searchParams).ID;

  if (!idString) {
    return (<h1>ID missing.</h1>);
  }

  const id = Number(idString);

  const data = await getOrderById(id);

  if (!data) return (<h1>Order with that ID does not exist.</h1>);

  const orderPath = "srd-markdown/orders/order list/" + data.gameClass.name + ".md";
  let orderText = fs.readFileSync(orderPath,'utf-8');
  orderText = orderText.replace(/\[Class Feat\]/g, data.order.class_feat_subtitle);
  orderText = orderText.replace(/\[Expert Attacks\]/g, data.order.expert_attacks_subtitle);
  orderText = orderText.replace(/\[Double Dice\]/g, data.order.double_dice_subtitle);
  orderText = orderText.replace(/\[Stat Boost\]/g, data.order.stat_boost_subtitle);

  return (
    <>
      <h1>{data.gameClass.name}</h1>
      <MarkdownPage text={orderText}></MarkdownPage>
    </>
  );
}
