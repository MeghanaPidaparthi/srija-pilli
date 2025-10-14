const Footer = () => {
  return (
    <footer className="bg-background py-12 border-t-4 border-foreground relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 rounded-full bg-primary border-4 border-foreground flex items-center justify-center text-2xl">
          ⭐
        </div>
      </div>
      <div className="container mx-auto px-4 pt-8">
        <div className="text-center">
          <p className="text-lg font-bold text-foreground mb-2">
            Portfolio 2025
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 Your Name. Built with AI & lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;