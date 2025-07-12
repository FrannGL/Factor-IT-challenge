export function Logo() {
  return (
    <div className="mb-6 flex items-center p-4 gap-2">
      <img
        src="/assets/logo.png"
        alt="FactorIt Logo"
        className="w-10 h-10 object-contain"
      />
      <span className="text-2xl font-bold">Factor IT</span>
    </div>
  );
}
