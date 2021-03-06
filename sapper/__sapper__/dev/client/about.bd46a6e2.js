import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as handle_promise, v as validate_slots, p as globals, a as space, e as element, t as text, r as empty, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, l as insert_dev, m as append_dev, n as noop, u as set_style } from './client.07fb7b29.js';

/* src\routes\about.svelte generated by Svelte v3.23.0 */

const { console: console_1 } = globals;
const file = "src\\routes\\about.svelte";

// (48:0) {:catch error}
function create_catch_block(ctx) {
	let p;
	let t_value = /*error*/ ctx[6].message + "";
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { style: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, t_value);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			set_style(p, "color", "red");
			add_location(p, file, 48, 1, 950);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_catch_block.name,
		type: "catch",
		source: "(48:0) {:catch error}",
		ctx
	});

	return block;
}

// (46:0) {:then name}
function create_then_block(ctx) {
	let p;
	let t0;
	let t1_value = /*name*/ ctx[5] + "";
	let t1;

	const block = {
		c: function create() {
			p = element("p");
			t0 = text("The name is ");
			t1 = text(t1_value);
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t0 = claim_text(p_nodes, "The name is ");
			t1 = claim_text(p_nodes, t1_value);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p, file, 46, 1, 906);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t0);
			append_dev(p, t1);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_then_block.name,
		type: "then",
		source: "(46:0) {:then name}",
		ctx
	});

	return block;
}

// (44:16)    <p>...waiting</p>  {:then name}
function create_pending_block(ctx) {
	let p;
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text("...waiting");
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t = claim_text(p_nodes, "...waiting");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p, file, 44, 1, 872);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_pending_block.name,
		type: "pending",
		source: "(44:16)    <p>...waiting</p>  {:then name}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let p;
	let t3;
	let t4;
	let await_block_anchor;
	let promise_1;

	let info = {
		ctx,
		current: null,
		token: null,
		pending: create_pending_block,
		then: create_then_block,
		catch: create_catch_block,
		value: 5,
		error: 6
	};

	handle_promise(promise_1 = /*promise*/ ctx[0], info);

	const block = {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text("About this site");
			t2 = space();
			p = element("p");
			t3 = text("This is the 'about' page. There's not much here.");
			t4 = space();
			await_block_anchor = empty();
			info.block.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-nvlz1j\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "About this site");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "This is the 'about' page. There's not much here.");
			p_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			await_block_anchor = empty();
			info.block.l(nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "About";
			add_location(h1, file, 35, 0, 700);
			add_location(p, file, 37, 0, 728);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t3);
			insert_dev(target, t4, anchor);
			insert_dev(target, await_block_anchor, anchor);
			info.block.m(target, info.anchor = anchor);
			info.mount = () => await_block_anchor.parentNode;
			info.anchor = await_block_anchor;
		},
		p: function update(new_ctx, [dirty]) {
			ctx = new_ctx;

			{
				const child_ctx = ctx.slice();
				child_ctx[5] = info.resolved;
				info.block.p(child_ctx, dirty);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(await_block_anchor);
			info.block.d(detaching);
			info.token = null;
			info = null;
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let myHeaders = new Headers();
	myHeaders.append("Content-Type", "text/json");

	let myInit = {
		method: "GET",
		headers: myHeaders,
		mode: "cors",
		cache: "default"
	};

	let request = new Request("http://localhost:1337/restaurants", myInit);
	let promise = getJson();

	async function getJson() {
		const res = await fetch(request);
		const json = await res.json();

		if (res.status === 200) {
			return json[0].description;
		} else {
			throw new Error(json);
		}
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<About> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("About", $$slots, []);

	$$self.$capture_state = () => ({
		myHeaders,
		myInit,
		request,
		promise,
		getJson
	});

	$$self.$inject_state = $$props => {
		if ("myHeaders" in $$props) myHeaders = $$props.myHeaders;
		if ("myInit" in $$props) myInit = $$props.myInit;
		if ("request" in $$props) request = $$props.request;
		if ("promise" in $$props) $$invalidate(0, promise = $$props.promise);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [promise];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYmQ0NmE2ZTIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYWJvdXQuc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzdmVsdGU6aGVhZD5cclxuXHQ8dGl0bGU+QWJvdXQ8L3RpdGxlPlxyXG48L3N2ZWx0ZTpoZWFkPlxyXG5cclxuPHNjcmlwdD5cclxuIFxyXG5cdGxldCBteUhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xyXG5cdG15SGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L2pzb24nKTtcclxuXHRsZXQgbXlJbml0ID0geyBcclxuXHRcdG1ldGhvZDogJ0dFVCcsXHJcblx0XHRoZWFkZXJzOiBteUhlYWRlcnMsXHJcblx0XHRtb2RlOiAnY29ycycsXHJcblx0XHRjYWNoZTogJ2RlZmF1bHQnXHJcblx0fTtcclxuXHRsZXQgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KCdodHRwOi8vbG9jYWxob3N0OjEzMzcvcmVzdGF1cmFudHMnLCBteUluaXQpXHJcblx0bGV0IHByb21pc2UgPSBnZXRKc29uKCk7XHJcblxyXG5cdGFzeW5jIGZ1bmN0aW9uIGdldEpzb24oKSB7XHJcblx0XHRjb25zdCByZXMgPSBhd2FpdCBmZXRjaChyZXF1ZXN0KTtcclxuXHRcdGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuXHRcdGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcclxuXHRcdFx0cmV0dXJuIGpzb25bMF0uZGVzY3JpcHRpb247XHJcblx0XHRcdGNvbnNvbGUubG9nKGpzb25bMF0uZGVzY3JpcHRpb24pXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoanNvbik7XHJcblx0XHRcdGNvbnNvbGUubG9nKGpzb24pXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKiBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcclxuXHRcdHByb21pc2UgPSBnZXRKc29uKCk7XHJcblx0fSAqL1xyXG48L3NjcmlwdD5cclxuXHJcbjxoMT5BYm91dCB0aGlzIHNpdGU8L2gxPlxyXG5cclxuPHA+VGhpcyBpcyB0aGUgJ2Fib3V0JyBwYWdlLiBUaGVyZSdzIG5vdCBtdWNoIGhlcmUuPC9wPlxyXG5cclxuPCEtLSA8YnV0dG9uIG9uOmNsaWNrPXtoYW5kbGVDbGlja30+XHJcblx0Z2V0IGpzb25cclxuPC9idXR0b24+IC0tPlxyXG5cclxueyNhd2FpdCBwcm9taXNlfVxyXG5cdDxwPi4uLndhaXRpbmc8L3A+XHJcbns6dGhlbiBuYW1lfVxyXG5cdDxwPlRoZSBuYW1lIGlzIHtuYW1lfTwvcD5cclxuezpjYXRjaCBlcnJvcn1cclxuXHQ8cCBzdHlsZT1cImNvbG9yOiByZWRcIj57ZXJyb3IubWVzc2FnZX08L3A+XHJcbnsvYXdhaXR9Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7eUJBZ0R3QixHQUFLLElBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQUZwQixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3Q0FIYixHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FyQ1YsU0FBUyxPQUFPLE9BQU87Q0FDM0IsU0FBUyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsV0FBVzs7S0FDeEMsTUFBTTtFQUNULE1BQU0sRUFBRSxLQUFLO0VBQ2IsT0FBTyxFQUFFLFNBQVM7RUFDbEIsSUFBSSxFQUFFLE1BQU07RUFDWixLQUFLLEVBQUUsU0FBUzs7O0tBRWIsT0FBTyxPQUFPLE9BQU8sQ0FBQyxtQ0FBbUMsRUFBRSxNQUFNO0tBQ2pFLE9BQU8sR0FBRyxPQUFPOztnQkFFTixPQUFPO1FBQ2YsR0FBRyxTQUFTLEtBQUssQ0FBQyxPQUFPO1FBQ3pCLElBQUksU0FBUyxHQUFHLENBQUMsSUFBSTs7TUFFdkIsR0FBRyxDQUFDLE1BQU0sS0FBSyxHQUFHO1VBQ2QsSUFBSSxDQUFDLENBQUMsRUFBRSxXQUFXOzthQUdoQixLQUFLLENBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
