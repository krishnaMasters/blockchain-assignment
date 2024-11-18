export default () => {
  const footerNavs = [
    { href: "#", name: "Terms" },
    {
      href: "#",
      name: "License",
    },
    {
      href: "#",
      name: "Privacy",
    },
    {
      href: "#",
      name: "About us",
    },
  ];

  return (
    <footer className="pt-10">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md: px-8">
        <div className="justify-between sm: flex">
          <div className="space-y-6">
            <img src="https://cdn-icons-png.flaticon.com/512/4249/4249179.png" className="w-16" />
            <p className="max-w-md">
            Stay informed with our advanced tracking system. Powered by blockchain, we offer secure and efficient management for every step of your supply chain.
            </p>
            <ul className="flex flex-wrap items-center gap-4 text-sm sm: text-base">
              {footerNavs.map((item, idx) => (
                <li className="text-gray-800 hover: text-gray-500 duration-150">
                  <a key={idx} href={item.href}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


        </div>
        <div className="mt-10 py-10 border-t md: text-center">
            <p>© 2024 Team6. All rights reserved.</p>
          </div>
      </div>
    </footer>
  );
};
