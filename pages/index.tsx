import Head from 'next/head'
import { FaGithub } from 'react-icons/fa'

import Container from '../components/Container'
import Logo from '../components/Logo'
import Layout from '../components/Layout'

const Index = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Langara Computer Science Club.</title>
          <meta property="og:image" content="/assets/og.png" />
        </Head>

        <Container>
          <Logo />

          <div className="rounded-lg text-white bg-brand-orange w-full my-12 md:my-24 leading-tight space-y-10 md:space-y-20 p-10 md:p-20 font-bold">
            <p className="text-6xl md:text-7xl">
              The best way to predict the future is to build it.
            </p>
            <p>
              Join the Langara Computer Science club to connect with fellow
              future builders today!
            </p>
          </div>

          <div>
            <h3 className="text-5xl md:text-6xl font-extrabold leading-none mb-10">
              Resources
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <a
                className="col-span-1 flex flex-col justify-between bg-black rounded-lg text-white text-2xl p-10 hover:text-brand-orange hover:cursor-pointer space-y-5"
                href="https://github.com/langaracs/course-resources"
              >
                <p className="text-3xl font-bold">Course Resources</p>

                <p className="text-xl">
                  A repository for all your course needs. Share notes, helpful
                  links, and more on GitHub.
                </p>

                <FaGithub className="text-6xl" />
              </a>

              <a
                className="col-span-1 flex flex-col justify-between bg-black rounded-lg text-white text-2xl p-10 hover:text-brand-orange hover:cursor-pointer space-y-5"
                href="https://github.com/langaracs/students"
              >
                <p className="text-3xl font-bold">Student Directory</p>

                <p className="text-xl">
                  Share a bit about yourself and connect with fellow students.
                  Looking for a partner for a project? Find them here!
                </p>

                <FaGithub className="text-6xl" />
              </a>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Index
