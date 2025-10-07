import MainNavigation from "../components/MainNavigation";
import { Outlet, useNavigation } from "react-router-dom";
export default function RootLayout() {
  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
}
