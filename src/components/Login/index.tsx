import PageTitle from '@app/components/Common/PageTitle';
import ThinNav from '@app/components/ThinNav';
import Footer from '@app/components/Footer';

const messages = {
  signin: 'Sign In',
  signinheader: 'Sign in to continue',
  signinwithplex: 'Use your Plex account',
  signinwithoverseerr: 'Use your {applicationTitle} account',
};

const Login = () => {
  return (
    <>
      <PageTitle title={messages.signin} />
      <div
        style={{
          background:
            'linear-gradient(180deg, rgba(8,0,17,1) 50px, rgba(43,11,83,1) 200px, rgba(43,11,83,1) 250px, rgba(8,0,17,1) 75%)!important',
        }}
      >
        <ThinNav />
        <main
          className="form-signin text-light m-auto pt-4"
          style={{ maxWidth: '380px', minHeight: '90vh' }}
        >
          <div className="container text-start ps-0">
            <h4>
              Log in with Ple<span className="plex-orange">x</span>&trade;
            </h4>
            <p className="small">
              You will use this account to log into{' '}
              <span className="text-purple">Nickflix</span>TV to watch your
              favourite movies and TV Shows.
            </p>
          </div>
          <form method="post" noValidate>
            <div className="form-floating text-dark mb-2">
              <input
                id="email"
                name="PlexEmail"
                type="email"
                className="form-control validate text-dark"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Use your Plex credentials"
                placeholder="name@example.com"
                style={{ cursor: 'auto' }}
                required
              />
              <label htmlFor="email" className="text-dark">
                Email address
              </label>
              <div className="invalid-feedback">
                Please provide a valid email address.
              </div>
            </div>
            <div className="form-floating text-dark">
              <input
                id="password"
                name="PlexPassword"
                type="password"
                className="validate form-control text-dark"
                placeholder="Password"
                style={{ cursor: 'auto' }}
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Use your plex credentials"
                required
              />
              <label htmlFor="password" className="text-dark">
                Password
              </label>
              <div className="invalid-feedback">
                Please enter your password.
              </div>
            </div>
            <div className="checkbox my-3">
              <input
                className="form-check-input"
                type="checkbox"
                id="indeterminate-checkbox"
                name="rememberme"
                value="true"
                defaultChecked
              />
              <label htmlFor="indeterminate-checkbox">Remember me</label>
            </div>
            <button
              className="w-100 btn btn-lg btn-purple"
              type="submit"
              name="action"
            >
              Login
            </button>
            <p className="mt-2 text-center" style={{ fontSize: '.8rem' }}>
              <a
                target="new"
                href="https://app.plex.tv/auth#?resetPassword"
                className="text-decoration-none link-warning"
              >
                Wait, I forgot my password
              </a>
            </p>
            <p className="mt-4 text-start text-light small">
              New to <span className="text-purple">Nickflix</span>TV?{' '}
              <a
                href="/join"
                className="link-light text-decoration-none fw-bold"
              >
                Sign up
              </a>
            </p>
          </form>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Login;
