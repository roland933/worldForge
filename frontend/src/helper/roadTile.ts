import type { RoadTile } from "../components/playground/Graph/Road/RoadTile";
import type { Connection } from "../components/shared/types/Graph/Connection";
import { GraphNode } from "../components/shared/types/Graph/GraphNode";

type RoadTileData = {
    tile: RoadTile;
    rotation: 0 | 90 | 180 | 270;
};

export function getRoadTile(
    node: GraphNode,
    connections: Connection[]
): RoadTileData {

    const directions = {
        up: false,
        down: false,
        left: false,
        right: false,
    };

    const nodeConnections = connections.filter(
        c => c.from === node.id || c.to === node.id
    );

    nodeConnections.forEach(connection => {

        const direction =
            connection.from === node.id
                ? connection.directions?.from
                : connection.directions?.to;

        if (direction) {
            directions[direction] = true;
        }
    });

    const { up, down, left, right } = directions;

    // -----------------
    // CROSS
    // -----------------

    if (up && down && left && right) {
        return {
            tile: "cross",
            rotation: 0
        };
    }

    // -----------------
    // T
    // -----------------

    if (up && left && right && !down) {
        return {
            tile: "t",
            rotation: 0
        };
    }

    if (right && up && down && !left) {
        return {
            tile: "t",
            rotation: 90
        };
    }

    if (down && left && right && !up) {
        return {
            tile: "t",
            rotation: 180
        };
    }

    if (left && up && down && !right) {
        return {
            tile: "t",
            rotation: 270
        };
    }

    // -----------------
    // CORNER
    // -----------------

    if (up && right && !down && !left) {
        return {
            tile: "corner",
            rotation: 0
        };
    }

    if (right && down && !up && !left) {
        return {
            tile: "corner",
            rotation: 90
        };
    }

    if (down && left && !up && !right) {
        return {
            tile: "corner",
            rotation: 180
        };
    }

    if (left && up && !down && !right) {
        return {
            tile: "corner",
            rotation: 270
        };
    }

    // -----------------
    // STRAIGHT
    // -----------------

    if (up && down && !left && !right) {
        return {
            tile: "straight",
            rotation: 0
        };
    }

    if (left && right && !up && !down) {
        return {
            tile: "straight",
            rotation: 90
        };
    }

    // -----------------
    // END
    // -----------------

    if (up && !down && !left && !right) {
        return {
            tile: "end",
            rotation: 0
        };
    }

    if (right && !up && !down && !left) {
        return {
            tile: "end",
            rotation: 90
        };
    }

    if (down && !up && !left && !right) {
        return {
            tile: "end",
            rotation: 180
        };
    }

    if (left && !up && !down && !right) {
        return {
            tile: "end",
            rotation: 270
        };
    }

    // fallback

    return {
        tile: "straight",
        rotation: 0
    };
}