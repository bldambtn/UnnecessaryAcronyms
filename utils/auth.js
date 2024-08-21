// Middleware to check if user is logged in
module.exports = (req, res, next) => {
  if (!req.session.user_id) {
    // Redirect to login if not logged in
    res.redirect("/login");
    return;
  }
  // Proceed if logged in
  next();
};