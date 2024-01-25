// 创建 mixin 对象
const myMixin = {
    data() {
      return {
        message: 'Hello, World!', // 示例属性
        count: 0, // 示例计数器属性
        isHidden: false, // 示例开关属性
        items: ['apple', 'banana', 'orange'], // 示例数组属性
        user: { name: 'Alice', age: 25 }, // 示例对象属性
        inputValue: '', // 示例输入框属性
        isLoading: false, // 示例加载状态属性
        // 添加更多属性...
      };
    },
    methods: {
      showMessage() {
        console.log(this.message); // 示例方法：打印消息
      },
      incrementCount() {
        this.count++; // 示例方法：增加计数器
      },
      toggleHidden() {
        this.isHidden = !this.isHidden; // 示例方法：切换开关状态
      },
      addItem(item) {
        this.items.push(item); // 示例方法：添加数组元素
      },
      removeItem(index) {
        this.items.splice(index, 1); // 示例方法：删除数组元素
      },
      updateUser() {
        this.user.name = 'Bob'; // 示例方法：更新对象属性
        this.user.age = 30;
      },
      setInputValue(value) {
        this.inputValue = value; // 示例方法：更新输入框属性
      },
      clearInput() {
        this.inputValue = ''; // 示例方法：清空输入框
      },
      setLoading(isLoading) {
        this.isLoading = isLoading; // 示例方法：更新加载状态
      },
      // 添加更多方法...
    },
    computed: {
      // 示例计算属性
      reversedMessage() {
        return this.message.split('').reverse().join('');
      },
      filteredItems() {
        return this.items.filter(item => item.toLowerCase().startsWith('a')); // 示例计算属性：过滤数组元素
      },
      // 添加更多计算属性...
    },
    created() {
      // 示例生命周期钩子函数：created
      console.log('Mixin created');
    },
    mounted() {
      // 示例生命周期钩子函数：mounted
      console.log('Mixin mounted');
    },
    beforeUpdate() {
      // 示例生命周期钩子函数：beforeUpdate
    },
    updated() {
      // 示例生命周期钩子函数：updated
    },
    destroyed() {
      // 示例生命周期钩子函数：destroyed
    },
    // 添加更多生命周期钩子函数...
  };
  
  export default myMixin;
  