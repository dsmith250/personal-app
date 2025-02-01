const Header = () => {
    return (
      <header className="bg-gray-900 text-white py-20 min-h-[600px] flex items-center" id="header">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-extrabold tracking-tight">
            Derek <span className="text-blue-400">Smith</span>
          </h1>
          <p className="text-2xl mt-4 opacity-80">Full-Stack Web Developer</p>          
        </div>
      </header>
    );
  };
  
  export default Header;
  