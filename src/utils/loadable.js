import React from 'react'
import loadable from 'react-loadable'


function Loading() {
  return (
    <div>loading...</div>
  )
}

export default (loader, loading = Loading) => {
  return loadable({
    loader,
    loading
  })
}