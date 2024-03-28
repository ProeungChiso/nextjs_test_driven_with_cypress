import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";

function NavbarComponent() {
  return (
    <Navbar fluid>
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            CYPRESS TEST
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink href="/page-about">About</NavbarLink>
        <NavbarLink href="/page-services">Services</NavbarLink>
        <NavbarLink href="/page-pricing">Pricing</NavbarLink>
        <NavbarLink href="/page-contact">Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default NavbarComponent;
