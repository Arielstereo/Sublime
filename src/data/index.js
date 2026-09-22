import categories from "./categories.json";
import categoryNames from "./categoryNames.json";
import p1 from "./products/kids/1.json";
import p2 from "./products/kids/2.json";
import p3 from "./products/empresas/3.json";
import p4 from "./products/empresas/4.json";
import p5 from "./products/remeras/5.json";
import p6 from "./products/tazas/6.json";
import p7 from "./products/remeras/7.json";
import p8 from "./products/empresas/8.json";
import p10 from "./products/remeras/10.json";
import p11 from "./products/remeras/11.json";
import p12 from "./products/tazas/12.json";
import p13 from "./products/tazas/13.json";
import p14 from "./products/tazas/14.json";
import p15 from "./products/tazas/15.json";
import p16 from "./products/otros/16.json";
import p17 from "./products/otros/17.json";
import p18 from "./products/remeras/18.json";
import p19 from "./products/otros/19.json";
import p20 from "./products/kids/20.json";
import p21 from "./products/tazas/21.json";
import p22 from "./products/empresas/22.json";

export const products = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p18,
  p19,
  p20,
  p21,
  p22,
];

export const categoryProducts = Object.keys(categoryNames).reduce(
  (acc, categoryId) => {
    acc[categoryId] = products
      .filter((product) => product.category === categoryId)
      .map(({ id, name, image, description }) => ({
        id,
        name,
        image,
        description,
      }));
    return acc;
  },
  {},
);

export { categories, categoryNames };

const data = { categories, products, categoryProducts, categoryNames };

export default data;
