import React from "react";
import { categories } from "../../../../data/categories";

export const Navbar: React.FC = () => {
  return (
    <div className="w-full h-11 bg-neutral transition-transform duration-300 hidden md:flex lg:flex mt-8">
      <div className="relative flex justify-start items-center container">
        {/* گزینه سطح بالا */}
        <ul className="hidden h-full items-stretch text-sm font-medium text-white lg:flex lg:mt-4">
          {categories.map((category) => (
            <li
              key={category.id}
              className="relative group flex cursor-pointer transition-all duration-100 ease-in-out  px-3"
            >
              <a className="hover:text-accent">{category.name}</a>
              {/* لیست زیرمنو */}
              {category.subcategories.length > 0 && (
                <div className="absolute right-0 top-[36px] z-10 w-[600px] transform cursor-auto border-b-md border-neutral/200 bg-white hidden group-hover:block text-neutral/600 md:border-t md:pb-2 md:shadow-md">
                  <div className="flex flex-col-reverse justify-start md:max-h-[402px] md:flex-row container">
                    <ul className="flex justify-start items-start gap-4 w-96 p-4">
                      {category.subcategories.map((subcategory) => (
                        <li key={subcategory.id} className="w-full">
                          <h4 className="font-bold border-r-2 border-error pb-1 pr-1 mb-2 text-accent">
                            {subcategory.name}
                          </h4>
                          <ul className="space-y-1">
                            {subcategory.items.map((item, index) => (
                              <li key={index} className="py-2">
                                <a href="#" className="text-sm text-gray">
                                  {item}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
    // <div className="bg-neutral text-white my-4">
    //   <nav className="container mx-auto px-6 py-2 w-full">
    //     {/* Menu Items */}
    //     <ul className="flex justify-start items-center w-full">
    //       {categories.map((category) => (
    //         <li key={category.id} className="relative group px-3">
    //           <a href="#" className="hover:text-accent cursor-pointer text-sm">
    //             {category.name}
    //           </a>
    //           {/* subMenu list */}
    //           {category.subcategories.length > 0 && (
    //             <div className="absolute right-0 top-full bg-white text-neutral shadow-md hidden group-hover:block">
    //               <ul className="p-4 space-y-4 w-full">
    //                 {category.subcategories.map((subcategory) => (
    //                   <li
    //                     key={subcategory.id}
    //                     className=" hidden group-hover:block bg-white text-neutral-content w-[700px]"
    //                   >
    //                     {category.subcategories.map((sub) => (
    //                       <li key={sub.id}>
    //                         <h4 className="font-bold border-b pb-1 mb-2">
    //                           {subcategory.name}
    //                         </h4>
    //                         <ul className="space-y-1">
    //                           {subcategory.items.map((item, index) => (
    //                             <li key={index}>
    //                               <a
    //                                 href="#"
    //                                 className="text-sm hover:text-accent"
    //                               >
    //                                 {item}
    //                               </a>
    //                             </li>
    //                           ))}
    //                         </ul>
    //                       </li>
    //                     ))}
    //                   </li>
    //                 ))}
    //               </ul>
    //             </div>
    //           )}
    //         </li>
    //       ))}
    //     </ul>
    //   </nav>
    // </div>
  );
};
