import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../withRoot'
import Layout from '../components/layout'
import BookItem from '../components/book/bookItem'
import { graphql } from 'gatsby'

const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing.unit * 20,
    },
    index: {
        margin: '0 auto',
    },
})

class Index extends React.Component {
    render() {
        const { classes, data: { allBook } } = this.props
        const { currentPage } = this.props.pageContext
        console.log(allBook)
        return (
            <Layout>
                <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: '1760px', margin: '0 auto' }}>
                    {
                        allBook.edges.map(item => {
                            return <BookItem data={item} />
                        })
                    }
                </div>

            </Layout>
        )
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Index))

export const query = graphql`
   query {
    allBook {
      edges {
        node {
          slug
          created_time
          cover_image
          start
          status
          stars
          comment
          name
          tags
        }
      }
    }
  }
  
`
