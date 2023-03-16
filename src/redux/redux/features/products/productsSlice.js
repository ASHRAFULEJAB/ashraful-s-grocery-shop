import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  products: [
    {
      id: 1,
      name: "Shari",
      price: 199,
      image:
        "https://stylesatlife.com/wp-content/uploads/2018/05/Red-Sarees-For-Wedding.jpg",
      stock: 20,
      des: "White voile saree with multicolour prints and attached petticoat. Comes with red printed and embroidered voilestitched blouse.Comes with red printed and embroidered voilestitched blouse.",
      quantity: 1,
    },
    {
      id: 2,
      name: " Shirt",
      price: 159,
      image:
        "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71eUwDk8z+L._AC._SR360,460.jpg",
      stock: 10,
      des: "Purple cotton shirt with casual collar and chest pocket.Hand Wash With Mild Detergent In Cold Water.Purple cotton shirtwith casual collar and chest pocket.Hand Wash With MildDetergent In Cold Water.",
      quantity: 1,
    },
    {
      id: 3,
      name: "Pant",
      price: 259,
      image:
        "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      stock: 15,
      des: "Black and olive gabardine pant. Features button closure and zipfly.Hand Wash With Mild Detergent In Cold Water.Black and olivegabardine pant. Features button closure and zip fly.Hand Wash With Mild Detergent In Cold Water.",

      quantity: 1,
    },
    {
      id: 4,
      name: "Lehenga",
      price: 559,
      image:
        "https://png.pngitem.com/pimgs/s/160-1606131_bridal-lehenga-png-transparent-png.png",
      stock: 20,
      des: "Pink denim jacket with printed cotton patch detail. Full button opening.Hand Wash With Mild Detergent In Cold WaterHand Wash  With Mild Detergent In Cold Water.Hand Wash With Mild Detergent In Cold Water",

      quantity: 1,
    },
  ],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
    updateQty: (state, action) => {
      const { id, stock } = action.payload;

      state.products = state.products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            stock: stock - 1,
          };
        } else {
          return product;
        }
      });
    },
    stockIncrement: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            stock: product.stock + 1,
          };
        } else {
          return product;
        }
      });
    },
    stockDecrement: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            stock: product.stock - 1,
          };
        } else {
          return product;
        }
      });
    },

    incrementQuantity: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else {
          return product;
        }
      });
    },
    decrementQuantity: (state, action) => {
      state.products = state.products.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        } else {
          return product;
        }
      });
    },
  },
});

export const {
  addToProduct,
  updateQty,
  incrementQuantity,
  decrementQuantity,
  stockIncrement,
  stockDecrement,
} = productSlice.actions;
export default productSlice.reducer;
