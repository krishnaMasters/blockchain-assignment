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
            <img src="https://www.floatui.com/logo.svg" className="w-32" />
            <p className="max-w-md">
              Nulla auctor metus vitae lectus iaculis, vel euismod massa
              efficitur.
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

          <div className="mt-10 py-10 border-t md: text-center">
            <p>© 2024 Raksha. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
