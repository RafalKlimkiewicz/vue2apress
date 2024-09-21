<template>
    <div class="float-right">
        <small>
            Your basket:
            <span v-if="itemCount > 0">
                
                {{ itemCount }} items {{ totalPrice | currency }}
            </span>
            <span v-else>
                (empty)
            </span>
        </small>
        <router-link v-if="itemCount !== 0" to="/cart" class="btn btn-sm bg-dark text-white">
            <i class="fa fa-shopping-cart"></i>
        </router-link>
        <span v-else class="btn btn-sm bg-dark text-white disabled">
            <i class="fa fa-shopping-cart"></i>
        </span>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default{
    computed:{
        ...mapGetters({
            itemCount: "cart/itemCount",
            totalPrice: "cart/totalPrice"
        })
    }
}
</script>