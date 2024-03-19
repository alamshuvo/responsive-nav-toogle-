import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
      const price= [
        {
          "id": 1,
          "name": "Basic",
          "price": "$30/month",
          "features": [
            "Access to cardio equipment",
            "Limited access to weight training area",
            "Group fitness classes twice a week",
            "Access to locker room and showers",
            "Discounts on personal training sessions"
          ]
        },
        {
          "id": 2,
          "name": "Standard",
          "price": "$50/month",
          "features": [
            "Access to cardio and weight training areas",
            "Unlimited group fitness classes",
            "Locker access",
            "Complimentary water and towel service",
            "Sauna access"
          ]
        },
        {
          "id": 3,
          "name": "Premium",
          "price": "$80/month",
          "features": [
            "Access to all gym facilities including sauna and pool",
            "Personalized training sessions",
            "Towel service included",
            "Nutritional consultation",
            "Discounts on merchandise"
          ]
        }
      ]
      
    return (
        <div className="my-5  ">
            <h2 className="md:text-5xl text-4xl text-center font-bold ">Best Prices</h2>
         <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-10">
         {
                price.map((option,idx)=><PriceOption key={idx} option={option}></PriceOption>)
            }
         </div>
        </div>
    );
};

export default PriceOptions;