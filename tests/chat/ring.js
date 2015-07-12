define(function () {
    var ring = new ChatRing();

    var message = "No one cares about this text";

    // if we push() text into ring then last() must return that message
    QUnit.test("CharRing.push", function(accert){
        ring.push(message);
        accert.equal(ring.last(), message);
    });

    // now lets pop it, using prev()
    QUnit.test("CharRing.prev", function(accert) {
        accert.equal(ring.prev(), message);
        // calling it again must not change anything
        accert.equal(ring.prev(), message);
    });

    // we now have exactly one message in the ring, so next() must return nothing
    QUnit.test("CharRing.next", function(accert) {
        accert.equal(ring.next(), "");
    });


    // okay, let's test several messages
    QUnit.test("CharRing.multiple-prev", function(accert) {
        ring.push("one");
        ring.push("two");
        ring.push("three");
        accert.equal(ring.prev(), "three");
        accert.equal(ring.prev(), "two");
        accert.equal(ring.prev(), "one");
        accert.equal(ring.prev(), message);
    });

    QUnit.test("CharRing.multiple-next", function(accert) {
        accert.equal(ring.next(), "one");
        accert.equal(ring.next(), "two");
        accert.equal(ring.next(), "three");
        accert.equal(ring.next(), "");
    });

    // now let's test backing of non-pushed message
    QUnit.test("CharRing.save", function(accert) {
        ring.push(message);
        var unsaved = "this text was not saved";
        ring.save(unsaved);
        accert.equal(ring.prev(), message);
        accert.equal(ring.next(), unsaved);
        accert.notEqual(ring.last(), unsaved);
    });

});