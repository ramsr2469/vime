/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
import { Components, JSX } from '@vime/core';


interface VimePosterProps {
  
  /** How the poster image should be resized to fit the container (sets the `object-fit` property). */
  fit?: Components.VimePoster["fit"]
  
  /**  */
  isVideoView?: Components.VimePoster["isVideoView"]
  
  /**  */
  currentPoster?: Components.VimePoster["currentPoster"]
  
  /**  */
  mediaTitle?: Components.VimePoster["mediaTitle"]
  
  /**  */
  playbackStarted?: Components.VimePoster["playbackStarted"]
}

interface VimePosterEvents {
  
  /** Emitted when the poster has loaded. */
  vLoaded: Parameters<JSX.VimePoster["onVLoaded"]>[0]
  
  /** Emitted when the poster will be shown. */
  vWillShow: Parameters<JSX.VimePoster["onVWillShow"]>[0]
  
  /** Emitted when the poster will be hidden. */
  vWillHide: Parameters<JSX.VimePoster["onVWillHide"]>[0]
}

interface VimePosterSlots {
  default: any
}
  
/* generated by Svelte v3.24.1 */
import {
	SvelteComponent,
	binding_callbacks,
	create_slot,
	detach,
	element,
	init,
	insert,
	listen,
	run_all,
	safe_not_equal,
	set_custom_element_data,
	transition_in,
	transition_out,
	update_slot
} from "svelte/internal";

import { createEventDispatcher, onMount } from "svelte";

function create_fragment(ctx) {
	let vime_poster;
	let current;
	let mounted;
	let dispose;
	const default_slot_template = /*$$slots*/ ctx[9].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], null);

	return {
		c() {
			vime_poster = element("vime-poster");
			if (default_slot) default_slot.c();
			set_custom_element_data(vime_poster, "fit", /*fit*/ ctx[0]);
			set_custom_element_data(vime_poster, "is-video-view", /*isVideoView*/ ctx[1]);
			set_custom_element_data(vime_poster, "current-poster", /*currentPoster*/ ctx[2]);
			set_custom_element_data(vime_poster, "media-title", /*mediaTitle*/ ctx[3]);
			set_custom_element_data(vime_poster, "playback-started", /*playbackStarted*/ ctx[4]);
		},
		m(target, anchor) {
			insert(target, vime_poster, anchor);

			if (default_slot) {
				default_slot.m(vime_poster, null);
			}

			/*vime_poster_binding*/ ctx[10](vime_poster);
			current = true;

			if (!mounted) {
				dispose = [
					listen(vime_poster, "vLoaded", /*onEvent*/ ctx[6]),
					listen(vime_poster, "vWillShow", /*onEvent*/ ctx[6]),
					listen(vime_poster, "vWillHide", /*onEvent*/ ctx[6])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope*/ 256) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[8], dirty, null, null);
				}
			}

			if (!current || dirty & /*fit*/ 1) {
				set_custom_element_data(vime_poster, "fit", /*fit*/ ctx[0]);
			}

			if (!current || dirty & /*isVideoView*/ 2) {
				set_custom_element_data(vime_poster, "is-video-view", /*isVideoView*/ ctx[1]);
			}

			if (!current || dirty & /*currentPoster*/ 4) {
				set_custom_element_data(vime_poster, "current-poster", /*currentPoster*/ ctx[2]);
			}

			if (!current || dirty & /*mediaTitle*/ 8) {
				set_custom_element_data(vime_poster, "media-title", /*mediaTitle*/ ctx[3]);
			}

			if (!current || dirty & /*playbackStarted*/ 16) {
				set_custom_element_data(vime_poster, "playback-started", /*playbackStarted*/ ctx[4]);
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (detaching) detach(vime_poster);
			if (default_slot) default_slot.d(detaching);
			/*vime_poster_binding*/ ctx[10](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let __ref;
	let __mounted = false;
	const dispatch = createEventDispatcher();
	let { fit = undefined } = $$props;
	let { isVideoView = undefined } = $$props;
	let { currentPoster = undefined } = $$props;
	let { mediaTitle = undefined } = $$props;
	let { playbackStarted = undefined } = $$props;
	const getWebComponent = () => __ref;

	onMount(() => {
		__mounted = true;
	});

	const setProp = (prop, value) => {
		if (__ref) $$invalidate(5, __ref[prop] = value, __ref);
	};

	const onEvent = e => {
		e.stopPropagation();
		dispatch(e.type, e.detail);
	};

	let { $$slots = {}, $$scope } = $$props;

	function vime_poster_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			__ref = $$value;
			$$invalidate(5, __ref);
		});
	}

	$$self.$$set = $$props => {
		if ("fit" in $$props) $$invalidate(0, fit = $$props.fit);
		if ("isVideoView" in $$props) $$invalidate(1, isVideoView = $$props.isVideoView);
		if ("currentPoster" in $$props) $$invalidate(2, currentPoster = $$props.currentPoster);
		if ("mediaTitle" in $$props) $$invalidate(3, mediaTitle = $$props.mediaTitle);
		if ("playbackStarted" in $$props) $$invalidate(4, playbackStarted = $$props.playbackStarted);
		if ("$$scope" in $$props) $$invalidate(8, $$scope = $$props.$$scope);
	};

	return [
		fit,
		isVideoView,
		currentPoster,
		mediaTitle,
		playbackStarted,
		__ref,
		onEvent,
		getWebComponent,
		$$scope,
		$$slots,
		vime_poster_binding
	];
}

class VimePoster extends SvelteComponent {
  $$prop_def: VimePosterProps;
  $$events_def: VimePosterEvents;
  $$slot_def: VimePosterSlots;

  $on<K extends keyof VimePosterEvents>(type: K, callback: (e: VimePosterEvents[K]) => any): () => void {
	  return super.$on(type, callback);
	}

  $set($$props: Partial<VimePosterProps>): void {
	  super.$set($$props);
	}

	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			fit: 0,
			isVideoView: 1,
			currentPoster: 2,
			mediaTitle: 3,
			playbackStarted: 4,
			getWebComponent: 7
		});
	}

	get getWebComponent(): HTMLVimePosterElement | undefined {
		return this.$$.ctx[7];
	}
}

export default VimePoster;