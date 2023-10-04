import { Layout } from "../../components/Layout";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { client } from "../../tina/__generated__/client";

export default function PostList(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const postsList = data.postConnection.edges;

  const styleImgCard ={
    margin: '10px',
    width: '250px',
    height: '250px',
    border: 'solid 2px',
    borderColor: '#176B87',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#176B87',
  }

  const styleImg ={
    width: '250px',
    height: '200px',
  }

  const styleText ={
    color: '#DAFFFB',
    height: '50px',
    fontSize: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  }

  const galleryStyle ={
    display: 'flex',
    flexDirection: 'row',
    
  }

  return (
    <Layout>
      <h1>Gallerie des photos</h1>
      <div style={galleryStyle}> 
        {postsList.map((post) => (
          <div key={post.node.id}>
            <Link href={`/posts/${post.node._sys.filename}`}>
              <a>
                <div style={styleImgCard}>
                <img src={post.node.imgSrc} alt={post.node.altImg} style={styleImg}/>
                <div style={styleText}>{post.node._sys.filename}</div>
                </div>
                </a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const { data, query, variables } = await client.queries.postConnection();

  return {
    props: {
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
