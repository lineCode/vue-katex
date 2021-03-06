import katex from 'katex'

export default {
  install: function (Vue, options) {
    Vue.directive('katex', function (el, binding) {
      var displayStyle = binding.arg === 'display' ? true : false

      if (binding.value.expression) {
        if (binding.value.options) {
          katex.render(binding.value.expression, el, {
            displayMode: displayStyle,
            ...binding.value.options
          })
        } else {
          katex.render(binding.value.expression, el, {
            displayMode: displayStyle
          })
        }
      } else {
        katex.render(binding.value, el, {
          displayMode: displayStyle
        })
      }
    })
  }
}
