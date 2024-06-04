import { fetchCategories } from "../services/CategoryService"
import Link from "next/link";

interface Asset {
  url: string;
  // Add any additional properties here if needed
}

interface Category {
  id: string;
  name: string;
  assets?: Asset[];
}

const fetchCategoriesTyped: () => Promise<Category[]> = fetchCategories;

export default async function Categories() {
  // Use fetchCategoriesTyped instead of fetchCategories
  const categoriesData = await fetchCategoriesTyped();
  categoriesData.forEach((category) => {
    console.log(category.assets);
  });

  const categories: Category[] = categoriesData.map((categoryData: any) => ({
    id: categoryData.id,
    name: categoryData.name,
    assets: categoryData.assets.map((asset: any) => ({ url: asset.url })),
  }));


  return (
    <div className="categories mt-5 mb-5 d-flex justify-content-between">
      {categories.map((category) => (
        <div key={category.id}>
          <div>
            {category?.assets?.map((asset, index) => (
              <img
                key={index}
                src={asset.url}
                alt={`Category ${category.name} image`}
                style={{ height: 100, width: 100 }}
              />
            ))}
          </div>
          <div>
            <Link legacyBehavior href={`/Categories/${category.id}`}>
              <a
                suppressHydrationWarning={true}
                style={{ color: "gray", textDecoration: "none" }}
              >
                {category.name}
              </a>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
