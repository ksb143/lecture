const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },

  // data에서 선언한 변수가 바뀔 때마다 실시
  // 일부 프로퍼티 변화에 반응하여 데이터 프로퍼티 업데이트 힐 때 (뭔가 변경되어 코드 실행)
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000)
      }
    }
    // name(newValue, oldValue) {
    //   if (newValue === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = newValue + ' ' + this.lastName;
    //   }
    // },
    
    // lastName(value) {
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = this. name + ' ' + value;
    //   }
    // }
  },

  // 출력값 동적으로 계산할 때
  computed: {
    // 형식은 메서드지만 변수처럼 이용
    fullname() {
      console.log('Running again')
      if (this.name === ''|| this.lastName === '') {
        return '';
        }
        return this.name + ' ' + this.lastName;
      },
  },

  methods: {
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + "Kim"
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
