<script>
export default {
  onLaunch: function () {
    console.log("App Launch");
  },
  onShow: function () {
    console.log("App Show");
  },
  onHide: function () {
    console.log("App Hide");
  },
};
</script>

<style>
/*每个页面公共css */
view {
  box-sizing: border-box;
}
page{
	background-color: #f9f9f9;
}
.clearfix::after {
          content: '';
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
  }

</style>
