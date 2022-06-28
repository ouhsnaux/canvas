const withSave =
  (ctx, func) =>
  (...rest) => {
    ctx.save();
    func(...rest);
    ctx.restore();
  };
