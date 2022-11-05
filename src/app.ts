import express, { Application } from "express";
import cors from "cors";
// import UserRoutes from "./routes/userRoutes";
// import CountryRoutes from "./routes/countryRoutes";
// import CategoryRoutes from "./routes/categoryRoutes";
// import StoreRoutes from "./routes/storeRoutes";
// import AttributeRoutes from "./routes/attributeRoutes";
// import BadgeRoutes from "./routes/badgeRoutes";
// import ChargeRoutes from "./routes/chargeRoutes";
// import ProductCategoryRoutes from "./routes/productCategoryRoutes";
// import ProductRoutes from "./routes/productRoutes";

const app: Application = express();
const corsOptions = {
    origin: "*"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/images/'));

// app.use('/api/user', UserRoutes);
// app.use('/api/country', CountryRoutes);
// app.use('/api/category', CategoryRoutes);
// app.use('/api/store', StoreRoutes);
// app.use('/api/attribute', AttributeRoutes);
// app.use('/api/charge', ChargeRoutes);
// app.use('/api/badge', BadgeRoutes);
// app.use('/api/product-category', ProductCategoryRoutes);
// app.use('/api/product', ProductRoutes);

app.use('/', (req, res) => {
    res.status(404).json({ message: "Not found" })
});

export default app;
