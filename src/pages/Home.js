import PostGrid from '../components/grid/PostGrid';
import SideBar from '../components/sidebar/Sidebar';
const Home = () => {
  return (
    <div>
    {/* <!-- main --> */}
    <section className="wrapper">
      <SideBar/>

      {/* <!-- posts container  --> */}
        <PostGrid/>
    </section>
    </div>
  );
};

export default Home;
