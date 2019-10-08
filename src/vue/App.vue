 <template>
  <h1>Vue display counter: {{ counter }}</h1>
</template>

<script>
import routes from "../routes";
import useReducer from "../utils/useReducer";

export default {
  data() {
    return {
      counter: 0
    };
  },
  methods: {
    updateCounter(value) {
      this.counter = value;
    }
  },
  mounted() {
    useReducer(this.updateCounter, "counter");
  }
};
</script>

<style>
</style>