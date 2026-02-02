import { NavLink, useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
    //Accesses the error thrown during an action, loader, or component render to be used in a route module
  const error = useRouteError();
//   Returns a function that lets you navigate programmatically in the browser in response to user interactions or effects.

// It's often better to use redirect in action/loader functions than this hook.

// The returned function signature is navigate(to, options?)/navigate(delta) where:
  const navigate=useNavigate()
  const handleGoback=()=>{
    navigate(-1)
  }

  return (
    <>
       <h1>error 404 page not found</h1>
      <div
        className="tenor-gif-embed"
        data-postid="25873492"
        data-share-method="host"
        data-aspect-ratio="1.01266"
        data-width="100%"
      >
        <NavLink to="https://tenor.com/view/humanerror-gif-25873492">
          Humanerror GIF
        </NavLink>
        from{" "}
        <NavLink to="https://tenor.com/search/humanerror-gifs">
          Humanerror GIFs
        </NavLink>
      </div>{" "}
      <script
        type="text/javascript"
        async
        src="https://tenor.com/embed.js"
      ></script> 
      <button onClick={handleGoback}>
        Go Back
      </button>
    </>
  );
};
