const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('~/static/icons', false, /\.svg$/)
requireAll(req)
