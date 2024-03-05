import { Subscription } from "rxjs";

export class SubscriptionHelper {
    public static Cleanup(subscriptions: Array<Subscription>) {
        subscriptions.forEach(sub => sub.unsubscribe());
    }
}