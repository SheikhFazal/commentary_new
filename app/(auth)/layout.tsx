import { Logo } from "./_components/logo";

const AuthLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full  grid grid-cols-12 ">
      <Logo />
      {children}
    </div>
  );
};
 
export default AuthLayout;
