
import {
  Card,
  CardContent,
 
} from "@/components/ui/card";

// Define a proper type for the API response
interface ApiResponseData {
  id: string;
  amount: string;
  currency: string;
  class: string;
}

interface ApiResponse {
  status: string;
  message: string;
  data: ApiResponseData;
}

const apiResponse: ApiResponse = {
  status: 'success',
  message: 'API call simulated successfully',
  data: {
    id: '12345',
    amount: '1000',
    currency: 'USD',
    class: 't-bill365',
  },
};

export const HeroCards = () => {
  return (
    <div className="mt-[80px] herobg hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card>
        <CardContent>
          <div className="api-card">
            <div className="response">
              <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};