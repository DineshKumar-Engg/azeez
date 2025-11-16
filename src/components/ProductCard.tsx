import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
}

const ProductCard = ({ image, title, category }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant="secondary" size="sm">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Quick View
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <p className="text-sm text-muted-foreground mb-1">{category}</p>
        <h3 className="font-semibold font-poppins mb-2">{title}</h3>
        {/* <Button size="sm" variant="outline" className="w-full mt-2">
          Add to Cart
        </Button> */}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
