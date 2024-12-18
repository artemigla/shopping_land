import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "@/redux/store/menuSlice";
import { RootState } from "@/redux/store/store";
import Link from "next/link";

const list = ["products", "carts", "basket"];

export default function BurgerMenu() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state?.burgermenu);

  return (
    <div>
      {
        <nav
          className={`absolute left-0 top-32 z-40 h-auto w-full transform bg-slate-600 text-white duration-700 ${isOpen ? "translate-x-0" : "-translate-x-full"} tablet:relative tablet:flex tablet:w-auto tablet:translate-x-0 tablet:items-center tablet:justify-between`}
        >
          <Link
            href={"/"}
            onClick={() => dispatch(closeMenu())}
            className="ml-2 p-6 text-lg font-medium uppercase text-white tablet:text-base"
          >
            Home
          </Link>
          {list?.map((item, index) => (
            <ul
              className="flex flex-col space-y-6 p-6 text-lg tablet:flex-row tablet:space-x-8 tablet:space-y-0 tablet:p-0 tablet:text-base"
              key={index}
            >
              <Link
                href={{ pathname: `/pages/${item}` }}
                className="ml-2 font-medium uppercase text-white"
                onClick={() => dispatch(closeMenu())}
              >
                {item}
              </Link>
            </ul>
          ))}
        </nav>
      }
    </div>
  );
}
